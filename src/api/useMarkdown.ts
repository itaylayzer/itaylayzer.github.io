export default async function (url: string) {
    const existed = sessionStorage.getItem(url);
    if (existed) return existed;

    const response = await fetch(url);
    const readme = await response.text();

    sessionStorage.setItem(url, readme);

    return readme;
}
