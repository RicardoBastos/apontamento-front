import React from 'react';
import { Container as ContainerGrid, Row, Column } from 'components/Grid';
import Button from 'components/Button';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { IFormulario } from '../../containers/Login/store/model';
import { Container, ContainerCenter, Empresa, Form } from './styles';

interface IFormularioLogin {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  formulario: IFormulario;
  onSubmitLogin(): void;
  loading?: boolean;
}

const Index: React.FC<IFormularioLogin> = ({
  formulario,
  onSubmitLogin,
  onChange,
}) => {
  const criarSchema = Yup.object().shape({
    email: Yup.string()
      .required('campo obrigatório')
      .max(60, 'tamanho máximo 60 caracteres'),
    senha: Yup.string()
      .required('campo obrigatório')
      .max(60, 'tamanho máximo 60 caracteres'),
  });

  const { register, handleSubmit, errors } = useForm<IFormulario>({
    resolver: yupResolver(criarSchema),
  });

  return (
    <Container>
      <ul className="cb-slideshow">
        <li>
          {' '}
          <span />
        </li>
        <li>
          {' '}
          <span />
        </li>
        <li>
          {' '}
          <span />
        </li>
        <li>
          {' '}
          <span />
        </li>
      </ul>
      <ContainerCenter>
        <Empresa>APONTAMENTO</Empresa>
        <Form>
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <ContainerGrid>
              <Row style={{ paddingBottom: '20px' }}>
                <Column
                  mobile={12}
                  tablet={12}
                  desktop={12}
                  style={{ paddingBottom: '20px' }}
                >
                  <Input
                    id="email"
                    name="email"
                    label="Email"
                    required
                    register={register}
                    value={formulario.email}
                    onChange={onChange}
                    errors={errors.email}
                  />
                </Column>
                <Column mobile={12} tablet={12} desktop={8}>
                  <Input
                    id="senha"
                    name="senha"
                    label="Senha"
                    required
                    register={register}
                    value={formulario.senha}
                    onChange={onChange}
                    errors={errors.senha}
                  />
                </Column>
              </Row>
              <Row>
                <Column
                  mobile={12}
                  tablet={12}
                  desktop={12}
                  direction="flex-start"
                >
                  <Button type="submit" text="Login" />
                </Column>
              </Row>
              <Row>Esqueceu sua senha?</Row>
            </ContainerGrid>
          </form>
        </Form>
      </ContainerCenter>
    </Container>
  );
};

export default Index;
