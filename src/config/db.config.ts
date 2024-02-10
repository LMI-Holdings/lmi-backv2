import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
    database: 'postgres',
    username: 'postgres',
    password: 'lmiholdings.123',
    host: 'db.fgjlxfwlkdfwzkqgucdt.supabase.co',
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