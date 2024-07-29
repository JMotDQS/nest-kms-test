import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './auth//auth.entity';

@Module({
imports: [
	TypeOrmModule.forRoot({
		type: 'mssql',
		host: 'localhost',
		port: 1433,
		username: '',
		password: '',
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
