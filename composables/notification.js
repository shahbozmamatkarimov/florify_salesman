export const useNotification = () => {
    const key = "updatable";
    // message.loading({ content: "Loading...", key, duration: 100 });
    // const openMessage = () => {
    //     setTimeout(() => {
    //         message.success({ content: "Loaded!", key, duration: 2 });
    //     }, 1000);
    // };


    const showLoading = (messageContent) => {
        message.loading({ content: messageContent, key: key, duration: 100 });
    };

    const showSuccess = (messageContent) => {
        setTimeout(() => {
            message.success({ content: messageContent, key: key, duration: 2 });
        }, 1000);
    };

    return {
        showLoading,
        showSuccess
    };
}