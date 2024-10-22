import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

function BookCard(params) {
  console.warn = () => {};
  const navigate = useNavigate();
  const refreshDate = (publishDate) => {
    if (publishDate === null) {
      return null
    }
    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }
    const date = new Date(publishDate).addHours(3);
    const dateDay = ("0" + date.getDate()).slice(-2);
    const dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
    return `${dateDay}/${dateMonth}/${date.getFullYear()}`;
  }
  params.props.publishDate = params.props.publishDate ? params.props.publishDate.slice(0, 10) : null
  const dateStr = refreshDate(params.props.publishDate)

  const handleClick = () => {
    if (params.props.id) {
      navigate(`/livros/${params.props.id}`);
    }
  };

  const idCard = params.props.id ? params.props.id : 0

  const headerTitle = params.props.title ? params.props.title : 'Sem título'

  const textDescription = params.props.description ? params.props.description : 'Sem descrição'

  const spanDate = dateStr ? <span className='date'>Lançado em {dateStr}</span>
    : <span className='date'>Sem data de lançamento</span>

  const aPages = params.props.pageCount ? <a><Icon name='file' />{params.props.pageCount} páginas</a>
    : <a><Icon name='file' />Sem número de páginas</a>

  return (
    <Card id={idCard} onClick={handleClick}>
        <Image src='/images/no-cover-book.png' wrapped ui={false} />
        <CardContent>
        <CardHeader>{headerTitle}</CardHeader>
        <CardMeta>
            {spanDate}
        </CardMeta>
        <CardDescription>
            {textDescription}
        </CardDescription>
        </CardContent>
        <CardContent extra>
          {aPages}
        </CardContent>
    </Card>
  );
}

export default BookCard