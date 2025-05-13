class LightboxHandler {
    constructor(lightboxConfigs) {
        this.lightboxConfigs = lightboxConfigs;

        this.init();
    }

    init() {
        this.lightboxConfigs.forEach(config => {
            const { id, onOpenCallback } = config;
            fsLightboxInstances[id].props.onOpen = onOpenCallback;
        });
    }
}

export default LightboxHandler;