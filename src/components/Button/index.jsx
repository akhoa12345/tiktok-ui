import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Button({
    to,
    href,
    primary = false,
    text = false,
    rounded = false,
    disabled = false,
    outline = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = ButtonStyle;
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={className}
            primary={primary}
            outline={outline}
            rounded={rounded}
            small={small}
            large={large}
            text={text}
            disabled={disabled}
            {...props}
        >
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className='title'>{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;

const ButtonStyle = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    padding: 9px 16px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid transparent;
    user-select: none;

    & + & {
        margin-left: 8px;
    }

    ${(props) =>
        props.disabled &&
        `
            pointer-events: none;
            opacity: 0.5;
        `}

    ${(props) =>
        props.rounded &&
        `
            border-radius: 999px;
            box-shadow: 0 2px 8px rgba(0 0 0 / 6%);
            border-color: rgba(22, 24, 35, 0.12);
            
            &:hover {
                border-color: rgba(22, 24, 35, 0.2);
                background-color: rgba(22, 24, 35, 0.03);
            }
        `}

    ${(props) =>
        props.primary &&
        `
        color: var(--white);
        background-color: var(--primary);
        border-color: var(--primary);

        &:hover {
            border-color: var(--primary);
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #fe2c55;
        }
        `}

    ${(props) =>
        props.outline &&
        `
            color: var(--primary);
            border-color: currentColor;

            &:hover {
                border-color: currentColor;
                background-color: rgba(254,44,85,0.06);
            }
        `}

    ${(props) =>
        props.small &&
        `
            min-width: 88px;
            padding: 4px 16px;
            
        `}

    ${(props) =>
        props.large &&
        `
            min-width: 140px;
            padding: 14px 16px;
            
        `}

    ${(props) =>
        props.text &&
        `
            &:hover {
                text-decoration: underline;
            }
            
        `}

    .icon + .title, .title + .icon {
        margin-left: 8px;
    }
    
`;
