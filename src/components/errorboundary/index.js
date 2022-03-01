import React from 'react';
import { Message } from './styles';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Message><span>😕</span> Something went wrong.</Message>;
    }

    return this.props.children;
  }
}