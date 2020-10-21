import React, { useMemo } from 'react';
import { Container as ContainerGrid, Row, Column } from 'components/Grid';
import Button from 'components/Button';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { IFormulario } from '../../containers/Login/store/model';
import { Container, ContainerCenter, Empresa, Form } from './styles';

interface IFormularioLogin {
  formulario: IFormulario;
  onSubmitLogin(data: IFormulario): void;
  loading?: boolean;
}

const Index: React.FC<IFormularioLogin> = ({ formulario, onSubmitLogin }) => {
  const criarSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required('campo obrigatório')
          .max(60, 'tamanho máximo 60 caracteres')
          .email('e-mail inválido'),
        senha: Yup.string()
          .required('campo obrigatório')
          .max(60, 'tamanho máximo 60 caracteres'),
      }),
    [],
  );

  const { register, handleSubmit, errors, reset } = useForm<IFormulario>({
    resolver: yupResolver(criarSchema),
    defaultValues: { email: formulario?.email, senha: formulario?.senha },
  });

  const onSubmit = async (data: IFormulario) => {
    await onSubmitLogin(data);
    reset();
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    errors={errors.email}
                  />
                </Column>
                <Column mobile={12} tablet={12} desktop={8}>
                  <Input
                    id="senha"
                    name="senha"
                    label="Senha"
                    required
                    type="password"
                    register={register}
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
