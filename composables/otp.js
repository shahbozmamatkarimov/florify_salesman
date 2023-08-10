export default useOtpStore = () => {
    const state = reactive({
        otp: "",
        phone: "",
        is_true: false,
    })

    return { state }
}