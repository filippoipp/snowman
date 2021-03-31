import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('following')
class Following {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: 'uuid';

    @Column()
    following_id: 'uuid';

}

export default Following