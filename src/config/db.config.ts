import { Sequelize } from 'sequelize-typescript';

// const sequelize = new Sequelize({
//     database: 'lmiclient',
//     username: 'postgres',
//     password: 'mckenzie1234',
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres',
//     models: [__dirname + '/../models'],
//     dialectOptions: {
//         connectTimeout: 600000, // Set the connection timeout to 60 seconds (adjust as needed)
//       },
// });
const sequelize = new Sequelize({
    database: 'postgres',
    username: 'postgres.fgjlxfwlkdfwzkqgucdt',
    password: 'lmiholdings.123',
    host: 'aws-0-us-east-1.pooler.supabase.com',
    port: 5432,
    dialect: 'postgres',
    models: [__dirname + '/../models'],
    dialectOptions: {
        connectTimeout: 600000, // Set the connection timeout to 60 seconds (adjust as needed)
      },
});


const syncDatabase = async (): Promise<void> => {
    try {
        await sequelize.sync();
        console.log('Database synced. app is live!!!!');
    } catch (error) {
        console.error('Unable to sync database:', error);
    }
};


export { sequelize, syncDatabase }
