import CreateCommentDto from "./dto/create-comment.dto";
import {CommentEntity} from "./comment.entity";
import {DocumentType} from '@typegoose/typegoose';

export interface CommentServiceInterface {
    create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>>;

    findByOfferId(offerId: string): Promise<DocumentType<CommentEntity>[]>;

    deleteByOfferId(offerId: string): Promise<number | null>;
}
