import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: 'uuid';

    @Column()
    user_name: string;

    @Column()
    text: string;

    @Column()
    color: string;

    @Column()
    visibility: string;

}

export default Post