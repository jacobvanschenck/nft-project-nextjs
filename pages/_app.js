import { Provider } from 'react-redux'
import WalletConnectModal from '../components/WalletConnectModal'
import AddressModal from '../components/AddressModal'
import configureStore from '../store/configureStore'
import '../styles/globals.css'

const store = configureStore()

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <AddressModal />
            <WalletConnectModal />
        </Provider>
    )
}

export default MyApp
