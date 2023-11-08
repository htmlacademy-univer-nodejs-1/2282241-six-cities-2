import {Container} from 'inversify';
import {CommentServiceInterface} from './comment-service.interface';
import {AppComponent} from '../../../types/app-component.enum';
import {types} from '@typegoose/typegoose';
import {CommentEntity, CommentModel} from './comment.entity';
import {CommentService} from './comment.service';

export function CreateCommentContainer() {
  const commentContainer = new Container();
  commentContainer.bind<CommentServiceInterface>(AppComponent.CommentServiceInterface).to(CommentService).inSingletonScope();
  commentContainer.bind<types.ModelType<CommentEntity>>(AppComponent.CommentModel).toConstantValue(CommentModel);
  return commentContainer;
}
