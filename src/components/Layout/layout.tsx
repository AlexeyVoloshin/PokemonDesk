import React from 'react';
import cn from 'classnames';

import s from './layout.module.scss';

interface IClassNameProps {
	children: React.ReactNode;
	className: React.HTMLAttributes<HTMLDivElement> | string,
	[name: string]: any;
}

const Layout: React.FC<IClassNameProps> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;