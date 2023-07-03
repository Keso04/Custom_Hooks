import { useEffect, useState } from "react"

const breakPoint = 576;

const detectDevice = () => {
    return window.innerWidth <= breakPoint ? "Mobile" : "Desktop";
}

const useDetectDevice = () => {
    const [device, setDevice] = useState();

    useEffect(() => {
        const handleResize = () => {
            setDevice(detectDevice());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return device;
}

export default useDetectDevice;