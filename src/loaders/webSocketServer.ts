import * as WebSocket from 'ws';

export default (server) => {
    return new WebSocket.Server({server})
}
