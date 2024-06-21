import { html } from 'lit';
import './button.css';

export class ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string = '';
  /**
   * Optional click handler
   */
  onClick?(): void {
    console.log(this);

  }
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, label, onClick }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return html`
    <button
      type="button"
      class="${mode}"
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
