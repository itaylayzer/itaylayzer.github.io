export async function fetchSHA(url: string) {
    const existed = sessionStorage.getItem(url);
    if (existed) return existed;

    const response = await fetch(url);
    const shaObject = await response.json();
    const { sha } = shaObject;
    const shorterSha = sha.slice(0, 7);

    sessionStorage.setItem(url, shorterSha);

    return shorterSha;
}
