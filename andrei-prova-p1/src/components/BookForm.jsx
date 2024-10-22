import React, { useState } from 'react'
import {
  CardGroup,
  Container,
  Grid,
  GridRow,
  GridColumn
} from 'semantic-ui-react'
import "./BookForm.css"
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import BookCard from './BookCard'
import PostBook from './PostBook'
import PatchBook from './PatchBook'
import DeleteBook from './DeleteBook'
import * as Yup from 'yup';

function BookForm(p) {
  console.warn = () => {};
  const [params, setParams] = useState(p.props);
  const navigate = useNavigate();
  const refreshDate = (publishDate) => {
    if (publishDate === null) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      return `${yyyy}-${mm}-${dd}`
    }
    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }
    const date = new Date(publishDate).addHours(3);
    const dateDay = ("0" + date.getDate()).slice(-2);
    const dateMonth = ("0" + (date.getMonth() + 1)).slice(-2);
    return `${date.getFullYear()}-${dateMonth}-${dateDay}`;
  }
  params.publishDate = params.publishDate ? params.publishDate.slice(0, 10) : null
  const dateStr = refreshDate(params.publishDate)

  const voltar = () => {
    navigate(`/livros`);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Deve informar o título')
      .min(6, 'O título deve ter pelo menos 6 caracteres')
      .max(20, 'O título não pode ultrapassar 20 caracteres'),
    description: Yup.string()
      .required('Deve informar a descrição')
      .min(6, 'A descrição deve ter pelo menos 6 caracteres')
      .max(60, 'A descrição não pode ultrapassar 60 caracteres'),
    publishDate: Yup.string()
      .required('Deve informar a data de publicação')
      .length(10, 'Data inválida'),
    pageCount: Yup.number()
      .required('Deve informar a contagem de páginas')
      .moreThan(10, 'O livro deve ter pelo menos 10 páginas')
      .lessThan(1000, 'O livro não pode ultrapassar 1000 páginas'),
  });
  const handleSubmit = (data) => {
    if (data.id > 0) {
      PatchBook(data)
    } else {
      PostBook(data)
    }
    setParams(data);
  }

  const initialValues = {
    title: params.title ? params.title : '',
    description: params.description ? params.description : '',
    publishDate: dateStr,
    pageCount: params.pageCount ? params.pageCount : ''
  };

  const excluir = () => {
    if (confirm(`Tem certeza de que deseja excluir o livro '${params.title}'?`)) {
      DeleteBook(params)
      setParams({
          "id": null,
          "title": null,
          "description": null,
          "pageCount": null,
          "excerpt": null,
          "publishDate": null
      })
    };
  }

  const botaoExcluir = params.id > 0 ? 
  <button type="button" onClick={excluir}>Excluir</button> : ''

  return (
    <Grid columns={2} divided><GridRow>
      <GridColumn>
        <Container text style={{ marginTop: '7em' }}>
          <CardGroup centered>
            <BookCard props={params} />
          </CardGroup>
        </Container>
      </GridColumn>
      <GridColumn>
        <Container text style={{ marginTop: '7em' }}>
          <div className="register-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, resetForm }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <Field
                      name="title"
                      type="text"
                      className={
                        'form-control' +
                        (errors.title && touched.title ? ' is-invalid' : '')
                      }
                    />
                    <ErrorMessage
                      name="title"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description"> Descrição </label>
                    <Field
                      name="description"
                      type="textarea"
                      className={
                        'form-control' +
                        (errors.description && touched.description ? ' is-invalid' : '')
                      }
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publishDate"> Data de Publicação </label>
                    <Field
                      name="publishDate"
                      type="date"
                      className={
                        'form-control' +
                        (errors.publishDate && touched.publishDate ? ' is-invalid' : '')
                      }
                    />
                    <ErrorMessage
                      name="publishDate"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pageCount"> Contagem de Páginas </label>
                    <Field
                      name="pageCount"
                      type="number"
                      className={
                        'form-control' +
                        (errors.pageCount && touched.pageCount ? ' is-invalid' : '')
                      }
                    />
                    <ErrorMessage
                      name="pageCount"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submeter
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-warning float-right"
                    >
                      Limpar
                    </button>
                    {botaoExcluir}
                    <br/><br/>
                    <button
                      type="button"
                      onClick={voltar}
                      className="btn btn-warning float-right"
                    >
                      Voltar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div >
        </Container>
      </GridColumn>
    </GridRow>
  </Grid>
  )
}
export default BookForm;