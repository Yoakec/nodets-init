import { Post } from "./entity/Post"
import { AppDataSource } from "./data-source"
import { Category } from "./entity/Category"

AppDataSource.initialize()
  .then(async () => {
    const category1 = new Category()
    category1.name = "TypeScript"
    await AppDataSource.manager.save(category1)

    const category2 = new Category()
    category2.name = "Programming"
    await AppDataSource.manager.save(category2)

    const post = new Post()
    post.title = "TypeScript"
    post.text = `TypeScript is Awesome!`
    post.categories = [category1, category2]

    await AppDataSource.manager.save(post)

    console.log("Post has been saved: ", post)
  })
  .catch((error) => console.log("Error: ", error))