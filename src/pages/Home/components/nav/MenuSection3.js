import * as React from 'react';
import PropTypes from 'prop-types';
import MenuUnstyled from '@mui/base/MenuUnstyled';
import MenuItemUnstyled, {
    menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledListbox = styled('ul')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

const StyledMenuItem = styled(MenuItemUnstyled)(
    ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled('button')(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 12px 16px;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : 'rgba(18,186,210,0)'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : 'rgba(18,186,210,0)'};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : 'rgba(18,186,210,0)'};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : 'rgba(18,186,210,0)'};
      color: ${theme.palette.mode === 'dark' ? grey[300] : 'rgba(18,186,210,100)'};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `,
);

const Popper = styled(PopperUnstyled)`
  z-index: 1;
`;

const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;

function MenuSection({ children, label }) {
    return (
        <MenuSectionRoot>
            <MenuSectionLabel>{label}</MenuSectionLabel>
            <ul>{children}</ul>
        </MenuSectionRoot>
    );
}

MenuSection.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string.isRequired,
};

export default function WrappedMenuItems() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isOpen = Boolean(anchorEl);
    const buttonRef = React.useRef(null);
    const menuActions = React.useRef(null);
    const preventReopen = React.useRef(false);

    const handleButtonClick = (event) => {
        if (preventReopen.current) {
            event.preventDefault();
            preventReopen.current = false;
            return;
        }

        if (isOpen) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleButtonMouseDown = () => {
        if (isOpen) {
            // Prevents the menu from reopening right after closing
            // when clicking the button.
            preventReopen.current = true;
        }
    };

    const handleButtonKeyDown = (event) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            setAnchorEl(event.currentTarget);
            if (event.key === 'ArrowUp') {
                menuActions.current?.highlightLastItem();
            }
        }
    };

    const close = () => {
        setAnchorEl(null);
        buttonRef.current.focus();
    };

    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
            close();
        };
    };

    return (
        <div>
            <TriggerButton
                type="button"
                onClick={handleButtonClick}
                onKeyDown={handleButtonKeyDown}
                onMouseDown={handleButtonMouseDown}
                ref={buttonRef}
                aria-controls={isOpen ? 'wrapped-menu' : undefined}
                aria-expanded={isOpen || undefined}
                aria-haspopup="menu"
            >
                קשרי לקוחות
            </TriggerButton>
            <MenuUnstyled
                actions={menuActions}
                open={isOpen}
                onClose={close}
                anchorEl={anchorEl}
                slots={{ root: Popper, listbox: StyledListbox }}
                slotProps={{ listbox: { id: 'simple-menu' } }}
            >
                <MenuSection label="חומרה">
                    <StyledMenuItem onClick={createHandleMenuClick('Back')}>
                        מסופון
                    </StyledMenuItem>
                    <StyledMenuItem onClick={createHandleMenuClick('Forward')} >
                        מדפסת
                    </StyledMenuItem>
                    <StyledMenuItem onClick={createHandleMenuClick('Refresh')} disabled>
                        מדבקות
                    </StyledMenuItem>
                </MenuSection>
                <MenuSection label="תקשורת">
                    <StyledMenuItem onClick={createHandleMenuClick('Save as...')}>
                        אין סנכרון
                    </StyledMenuItem>
                    <StyledMenuItem onClick={createHandleMenuClick('Print...')}>
                        עסקאות לא עוברות
                    </StyledMenuItem>
                </MenuSection>
                <MenuSection label="נתונים בפריוריטי">
                    <StyledMenuItem onClick={createHandleMenuClick('Zoom in')}>
                        מק"טים
                    </StyledMenuItem>
                    <StyledMenuItem onClick={createHandleMenuClick('Zoom out')}>
                        עסקאות
                    </StyledMenuItem>
                </MenuSection>
                <li className="helper">Current zoom level: 100%</li>
            </MenuUnstyled>
        </div>
    );
}