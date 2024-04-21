import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAddFavorite } from '../hooks/Hooks'
import menuIcon from '../assets/icons/menu.svg'
import closeIcon from '../assets/icons/close.svg'
import bookmarkOutline from '../assets/icons/bookmark-outline.svg'
import bookmark from '../assets/icons/bookmark.svg'
import heartOutline from '../assets/icons/heart-outline.svg'
import heart from '../assets/icons/heart.svg'
import account from '../assets/icons/account.svg'
import { increasePostLike, getCurrentUser } from '../functions/Functions'

export const Menu = ({ post_id, post }) => {
  const [ clicked, setClicked ] = useState(false)
  const [ likeClicked, setLikeClicked ] = useState(false)
  const [ favoriteClicked, setFavoriteClicked ] = useState(false)
  
  useEffect(() => {
    async function checkIfPostHasBeenAddedToFavoriteAndGetLiked(){
      const currentUser = await getCurrentUser()
      if(post?.liked_by.includes(currentUser._id)) setLikeClicked(true)
      if(currentUser.favorites_posts.includes(post_id)) setFavoriteClicked(true)
    }
    checkIfPostHasBeenAddedToFavoriteAndGetLiked()
  }, [post])

  async function addToFavorite(){
    if(favoriteClicked === false) await useAddFavorite(post_id)
    setFavoriteClicked(true)
  }
  async function postLiked(){
    const currentUser = await getCurrentUser()
    if(likeClicked === false) await increasePostLike(post_id, currentUser?._id)
    setLikeClicked(true)
  }

  return (
    <div className="flex flex-col fixed z-20 right-10 bottom-8">
      <button onClick={addToFavorite} className={`p-4 bg-[#101010] rounded-full absolute ${clicked ? 'bottom-[12.5rem]' : 'bottom-0'} transition-all duration-[1200ms]`}>
        {favoriteClicked ? <img src={bookmark} alt="add" width={'25px'} className='fill-white'/> : <img src={bookmarkOutline} alt="add" width={'25px'} className='fill-white'/>}
      </button>
      <button onClick={postLiked}  className={`p-4  bg-[#101010] rounded-full absolute ${clicked ? 'bottom-[8.5rem]' : 'bottom-0'} transition-all duration-[700ms]`}>
        {likeClicked ? <img src={heart} alt="add" width={'25px'} className='fill-white'/> : <img src={heartOutline} alt="add" width={'25px'} className='fill-white'/>}
      </button>
      <Link to={'/articles/account'} className={`p-4 bg-[#101010] rounded-full absolute ${clicked ? 'bottom-[4.5rem]' : 'bottom-0'} transition-all duration-400 `}>
        <img src={account} alt="add" width={'25px'} className='fill-white'/>
      </Link>
      <button onClick={() => setClicked(prev => !prev)} className={`p-4 relative z-10  bg-[#101010] rounded-full scale-125`}>
        <img src={clicked ? closeIcon : menuIcon} alt="add" width={'25px'} className='fill-white'/>
      </button>
    </div>
  )
}
