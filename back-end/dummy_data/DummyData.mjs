import { User , Post, Category } from '../Model/Models.mjs'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

export class DummyData {
    async generateDummyPosts(qty){
        const categories = await Category.find({}, { category: true })
        const users = await User.find({}, { _id: true, username: true })
        for(let i = 0; i < qty; i++){
            const randomIdCategories = faker.number.int({ min: 0, max: (categories.length - 1)})
            const randomIdUsers = faker.number.int({ min: 0, max: (users.length - 1)})
            await Post.create({
                uid: i + 1,
                author: {
                    _id: users[randomIdUsers]._id,
                    username: users[randomIdUsers].username,
                },
                title: faker.lorem.sentence(10),
                content: faker.lorem.paragraph(20),
                category: categories[randomIdCategories].category,
                image: 'dummy.jpg',
            })
        }
    }

    async generateDummyUser(qty){
        for (let i = 0; i < qty; i++) {
            let username = faker.person.fullName()
            let email = `${username.split(' ')[0].toLowerCase()}@gmail.com`
            let password = `${username.split(' ')[0].toLowerCase()}123`
            let hashedPassword = bcrypt.hashSync(password, 10)
            await User.create({ username, email, password: hashedPassword })
        }
    }
}