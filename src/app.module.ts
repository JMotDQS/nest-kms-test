import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './auth//auth.entity';

@Module({
imports: [
	TypeOrmModule.forRoot({
		type: 'mssql',
		host: '10.1.10.45',
		//host: 'localhost\\SQLEXPRESS',
		port: 1433,
		username: 'DQSDirectLocal',
		//username: 'MyAdmin',
		password: 'Detroit123',
		//password: 'rootPassword',
		database: 'kms-react',
		options: {
			encrypt: false,
		},
		synchronize: true,
		entities: [Employees],
	}),
	AuthModule, UserModule
],
})
export class AppModule {}
