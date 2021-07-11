export async function load() {
    await import('./core.js');
    await import('./users.js');
    await import('./channels.js');
}

await load();
