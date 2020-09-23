import { store } from 'react-notifications-component';

interface INotificationProps {
  type: 'success' | 'danger' | 'info' | 'default' | 'warning';
  title: string;
  message: string;
}

export const notification = (param: INotificationProps): void => {
  const { title, message, type } = param;
  store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-center',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
      duration: type === 'info' || type === 'danger' ? 5000 : 2000,
      showIcon: true,
      onScreen: true,
      pauseOnHover: true,
    },
  });
};
