import { ReactNode } from 'react';
import { toast } from 'react-toastify';
interface IProps {
  description: ReactNode;
  duration?: number;
  icon?: boolean | ReactNode |any;
  hideProgressBar?: boolean;
}

export const notificationHelper = {
  success: ({ description, duration, icon, hideProgressBar }: IProps) => {
    toast.success(description, {
      autoClose: duration,
      position: 'top-right',
      icon: icon,
      hideProgressBar: hideProgressBar,
      style: { top: '3em' },
    });
  },
  info: ({ description, duration, icon, hideProgressBar }: IProps) => {
    toast.info(description, {
      autoClose: duration,
      position: 'top-right',
      icon: icon,
      hideProgressBar: hideProgressBar,
      style: { top: '3em' },
    });
  },
  warning: ({ description, duration, icon, hideProgressBar }: IProps) => {
    toast.warning(description, {
      autoClose: duration,
      position: 'top-right',
      icon: icon,
      hideProgressBar: hideProgressBar,
      style: { top: '3em' },
    });
  },
  error: ({ description, duration, icon, hideProgressBar }: IProps) => {
    toast.error(description, {
      autoClose: duration,
      position: 'top-right',
      icon: icon,
      hideProgressBar: hideProgressBar,
      style: { top: '3em' },
    });
  },
  hint: ({ description, duration, icon, hideProgressBar }: IProps) => {
    toast.success(description, {
      autoClose: duration,
      position: 'top-right',
      icon: icon || false,
      progressStyle: { background: '#ccc' },
      hideProgressBar: hideProgressBar,
      style: { top: '3em' },
    });
  },

};
