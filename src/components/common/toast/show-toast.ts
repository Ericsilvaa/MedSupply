import { toast } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ShowToastOptions {
    message: string;
    type?: ToastType;
    description?: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}

export function showToast({ message, type = 'success', description, duration = 4000, action }: ShowToastOptions) {
    return toast[type](message, {
        description,
        duration,
        action: action
            ? {
                  label: action.label,
                  onClick: action.onClick
              }
            : undefined
    });
}
