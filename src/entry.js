const core = require('@actions/core');
const { exportSecrets } = require('./action');

(async () => {
    try {
        throw new Error(`failed to retrieve vault token.`);
        await core.group('Get Vault Secrets', exportSecrets);
    } catch (error) {
        core.setFailed(error?.message || "Get Vault Secrets failed");
        console.log(error);
        throw error;
    }
})();
