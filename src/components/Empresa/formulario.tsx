import React from 'react';
import Title from 'components/Title';
import LinkButton from 'components/LinkButton';
import Input from 'components/Input';
import { Container, Row, Column } from 'components/Grid';
import { IFormulario } from 'containers/Empresa/store/model';
import InputCheckBox from 'components/InputCheckBox';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import { ContainerForm } from './styles';

interface IFormularioEmpresa {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  formulario: IFormulario;
  onSubmitEmpresa(data: IFormulario): void;
  loading?: boolean;
}

const Formulario: React.FC<IFormularioEmpresa> = ({
  onChange,
  formulario,
  onSubmitEmpresa,
}) => {
  const criarSchema = Yup.object().shape({
    nome: Yup.string()
      .required('campo obrigatório')
      .max(60, 'tamanho máximo 60 caracteres'),
  });

  const { register, handleSubmit, errors, reset } = useForm<IFormulario>({
    resolver: yupResolver(criarSchema),
  });

  const onSubmit = async (data: IFormulario) => {
    await onSubmitEmpresa(data);
    reset();
  };

  return (
    <ContainerForm>
      <Title title="NOVO">
        <LinkButton text="voltar" type="primary" link="/empresa" />
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <Column mobile={12} tablet={12} desktop={4}>
              <Input
                id="nome"
                name="nome"
                label="Nome"
                required
                register={register}
                value={formulario.nome}
                onChange={onChange}
                errors={errors.nome}
              />
            </Column>
            <Column mobile={12} tablet={12} desktop={3}>
              <InputCheckBox
                name="status"
                checked={formulario.status}
                register={register}
                label="Ativo"
                onChange={onChange}
              />
            </Column>
          </Row>
          <Row>
            <Column mobile={12} tablet={12} desktop={12} direction="flex-end">
              <Button type="submit" text="Salvar" />
            </Column>
          </Row>
        </Container>
      </form>
    </ContainerForm>
  );
};

export default Formulario;
