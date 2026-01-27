import React from 'react';
import { AsyncModalProps } from 'async-modal-render';

export interface ModalProps extends AsyncModalProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open = true,
  title = '提示',
  children,
  okText = '确定',
  cancelText = '取消',
  width = 520,
  footer,
  closable = true,
  maskClosable = true,
  onOk,
  onCancel,
}) => {
  if (!open) {
    return null;
  }
  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (maskClosable && e.target === e.currentTarget) {
      onCancel?.();
    }
  };

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // 遮罩层样式
  const maskStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // 弹窗容器样式
  const modalStyle: React.CSSProperties = {
    position: 'relative',
    width: typeof width === 'number' ? `${width}px` : width,
    maxWidth: 'calc(100vw - 32px)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    pointerEvents: 'auto',
    maxHeight: 'calc(100vh - 32px)',
    display: 'flex',
    flexDirection: 'column',
  };

  // 关闭按钮样式
  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '17px',
    right: '17px',
    zIndex: 10,
    padding: 0,
    color: 'rgba(0, 0, 0, 0.45)',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    background: 'transparent',
    border: 0,
    outline: 0,
    cursor: 'pointer',
    transition: 'color 0.3s',
    fontSize: '16px',
    width: '22px',
    height: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // 标题样式
  const headerStyle: React.CSSProperties = {
    padding: '16px 24px',
    color: 'rgba(0, 0, 0, 0.88)',
    background: 'transparent',
    borderRadius: '8px 8px 0 0',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1.5,
    wordWrap: 'break-word',
  };

  // 内容样式
  const bodyStyle: React.CSSProperties = {
    padding: '20px 24px',
    fontSize: '14px',
    lineHeight: 1.5714285714285714,
    color: 'rgba(0, 0, 0, 0.88)',
    flex: 1,
    overflowY: 'auto',
  };

  // 底部按钮区样式
  const footerStyle: React.CSSProperties = {
    padding: '10px 16px',
    textAlign: 'right',
    background: 'transparent',
    borderTop: '1px solid rgba(5, 5, 5, 0.06)',
    borderRadius: '0 0 8px 8px',
  };

  // 按钮样式
  const buttonStyle: React.CSSProperties = {
    lineHeight: 1.5714285714285714,
    position: 'relative',
    display: 'inline-block',
    fontWeight: 400,
    whiteSpace: 'nowrap',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
    userSelect: 'none',
    touchAction: 'manipulation',
    height: '32px',
    padding: '4px 15px',
    fontSize: '14px',
    borderRadius: '6px',
    outline: 'none',
    border: '1px solid #d9d9d9',
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.88)',
  };

  const primaryButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    color: '#fff',
    backgroundColor: '#1677ff',
    borderColor: '#1677ff',
    boxShadow: '0 2px 0 rgba(5, 145, 255, 0.1)',
  };

  const renderFooter = () => {
    if (footer === null) {
      return null;
    }

    if (footer !== undefined) {
      return <div style={footerStyle}>{footer}</div>;
    }

    return (
      <div style={footerStyle}>
        <button
          style={buttonStyle}
          onClick={handleCancel}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            e.currentTarget.style.borderColor = '#d9d9d9';
          }}
        >
          {cancelText}
        </button>
        <button
          style={{ ...primaryButtonStyle, marginLeft: '8px' }}
          onClick={handleOk}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4096ff';
            e.currentTarget.style.borderColor = '#4096ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1677ff';
            e.currentTarget.style.borderColor = '#1677ff';
          }}
        >
          {okText}
        </button>
      </div>
    );
  };

  return (
    <div style={maskStyle} onClick={handleMaskClick}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {closable && (
          <button
            style={closeStyle}
            onClick={handleCancel}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.88)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(0, 0, 0, 0.45)';
            }}
          >
            <span style={{ fontSize: '14px' }}>✕</span>
          </button>
        )}
        {title && <div style={headerStyle}>{title}</div>}
        <div style={bodyStyle}>{children}</div>
        {renderFooter()}
      </div>
    </div>
  );
};

export default Modal;
