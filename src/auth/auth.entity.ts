import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('g_employees')
export class Employees {
	@PrimaryGeneratedColumn('uuid')
	pk_id: number;

	@Column({
		name: 'emp_id',
		length: 10,
		nullable: false
	})
	emp_id: string;

	@Column({
		name: 'first_name',
		length: 255,
		nullable: false
	})
	first_name: string;

	@Column({
		name: 'last_name',
		length: 255,
		nullable: false
	})
	last_name: string;

	@Column({
		name: 'middle_initial',
		length: 2,
		nullable: true
	})
	middle_initial: string;
}