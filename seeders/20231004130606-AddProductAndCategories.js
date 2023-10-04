'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const products = await queryInterface.bulkInsert('Products', [
      {
        title: "Kulkas",
        sku: "Freezer001",
        quantity: 20,
        price: 2000000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Oven",
        sku: "Kitchen001",
        quantity: 50,
        price: 5500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Microwave",
        sku: "Kitchen002",
        quantity: 100,
        price: 4200000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Basket Ball",
        sku: "SPORT001",
        quantity: 200,
        price: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Soccer Ball",
        sku: "SPORT002",
        quantity: 200,
        price: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Running Shoe",
        sku: "SPORT003",
        quantity: 500,
        price: 1500000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Baseball Bat",
        sku: "SPORT004",
        quantity: 250,
        price: 800000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})


    const categories = await queryInterface.bulkInsert("Categories", [
      {
        title: "Kitchen",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Sport",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})

    const kitchenCategory = categories[0]
    const sportCategory = categories[1]

    const kulkas = products[0]
    const oven = products[1]
    const microwave = products[2]

    const basketBall = products[3]
    const soccerBall = products[4]
    const runningShoe = products[5]
    const baseballBat = products[6]

    await queryInterface.bulkInsert("ProductCategories", [
      {
        product_id: kulkas.id,
        category_id: kitchenCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: oven.id,
        category_id: kitchenCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: microwave.id,
        category_id: kitchenCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: basketBall.id,
        category_id: sportCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: soccerBall.id,
        category_id: sportCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: runningShoe.id,
        category_id: sportCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        product_id: baseballBat.id,
        category_id: sportCategory.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
    await queryInterface.bulkDelete("ProductCategories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
