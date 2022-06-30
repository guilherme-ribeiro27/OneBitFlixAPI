'use strict';


module.exports = {
  up: async (queryInterface, Sequelize)=> {
    
    const [courses] = await queryInterface.sequelize.query('SELECT id FROM categories;',{type: Sequelize.QueryTypes.SELECT});

    await queryInterface.bulkInsert('courses', [
      { name: 'Programador Full-stack Javascript', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 21 , created_at: new Date(), updated_at: new Date() },
      { name: 'Dominando a Linguagem Ruby', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 21 , created_at: new Date(), updated_at: new Date() },
      { name: 'Micro-serviços com Node.js', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 22, created_at: new Date(), updated_at: new Date() },
      { name: 'Criando APIs Profissionais com Ruby on Rails', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 22 , created_at: new Date(), updated_at: new Date() },
      { name: 'TDD na Prática: Testando APIs Node.js', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 22 , created_at: new Date(), updated_at: new Date() },
      { name: 'TDD na Prática: Testando Aplicações React', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 23 ,  created_at: new Date(), updated_at: new Date() },
      { name: 'Especialista Front-end: Vue.js', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 23 , created_at: new Date(), updated_at: new Date() },
      { name: 'Criando Sites e Apps 3D com Three.js', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 23 , created_at: new Date(), updated_at: new Date() },
      { name: 'Dominando o Bootstrap 5', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 23 , created_at: new Date(), updated_at: new Date() },
      { name: 'Visual Studio para Programadores Javascript', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 24 , created_at: new Date(), updated_at: new Date() },
      { name: 'Comandos do Terminal Linux: Um Guia Completo', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 24 , created_at: new Date(), updated_at: new Date() },
      { name: 'Como ser um Programador Produtivo', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 25 , created_at: new Date(), updated_at: new Date() },
      { name: 'Comunicação e Trabalho em Equipe', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 25 , created_at: new Date(), updated_at: new Date() },
      { name: 'Programador Nômade', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', featured: true, category_id: 25, created_at: new Date(), updated_at: new Date() },
      { name: 'O Guia do Programador Freelancer', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 25 , created_at: new Date(), updated_at: new Date() },
      { name: 'Inglês Técnico para Programadores', synopsis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', category_id: 25, created_at: new Date(), updated_at: new Date() }
    ])
  },

  down: async (queryInterface, Sequelize)=> {
    await queryInterface.bulkDelete('courses', null, {})
  }
};
