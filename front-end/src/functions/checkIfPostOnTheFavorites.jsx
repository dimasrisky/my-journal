import React from 'react'

export default function checkIfPostOnTheFavorites({ arrayOfFavorites, id_post }) {
  if(arrayOfFavorites.id?.find(id_post)) return true
}
