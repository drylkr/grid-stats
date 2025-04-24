/**
 * @copyright 2025 Daryl Ong
 * @license Apache-2.0
 */

/**
 * Assets
 */
import { logo } from '@/assets';

type LogoProps = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a
      href=''
      className=''
    >
      {variant === 'default' && (
        <img
          src={logo}
          alt='GridStats Logo'
          width={100}
          // height={51}
        />
      )}

      {variant === 'icon' && (
        <img
          src={logo}
          alt='GridStats Logo'
          width={50}
          // height={50}
        />
      )}
    </a>
  );
};

export default Logo;
