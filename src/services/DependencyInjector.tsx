import React from "react";

interface DependencyProviderProps {
  dependencies: (new () => BaseDependency)[];
}

export abstract class BaseDependency {
  static id: string;
  update: () => {};
  dispose: () => {};
}

interface DependencyState {
  dependencies: Record<any, any>;
}

const defaultDependencies: DependencyState = {
  dependencies: {}
};

const DependencyContext = React.createContext(defaultDependencies);

export default class DependencyProvider extends React.Component<
  DependencyProviderProps,
  DependencyState
> {
  // map = new Map<any, any>();

  constructor(props: DependencyProviderProps) {
    super(props);

    const dependencies = {};
    for (let Dep of props.dependencies) {
      const DepAny = Dep as any;
      dependencies[DepAny.id] = new Dep();
      dependencies[DepAny.id].update = this.update;
    }

    this.state = { dependencies };
  }

  componentWillUnmount() {
    this.state.dependencies.forEach(dep => dep.dispose());
  }

  update = () => {
    // Force a re-render in all dependents, by manually informing them of a state change
    this.setState({});
  };

  useDependency = <T extends BaseDependency>(dependency: T) => {
    // return this.state.dependencies[dependency.id];
  };

  render() {
    return (
      <DependencyContext.Provider value={this.state}>
        {this.props.children}
      </DependencyContext.Provider>
    );
  }
}

export const useDependency = <T extends BaseDependency>(dependency: (new () => T)) => {
  const state = React.useContext(DependencyContext);
  return state.dependencies[(dependency as any).id] as T;
};
