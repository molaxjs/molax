class Component {
    props: object;
    state: object;
    constructor(props: object) {
      this.props = props;
      this.state = {};
    }
  
    setState(state: object) {
      this.state = Object.assign({}, this.state, state);
    }
  
    render() {
      return "";
    }
}

export default Component;