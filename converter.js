const fs = require("fs");
const dir = fs
    .readdirSync("./content/_blog")
  .filter((file) => file.endsWith(".md"));

for (let index = 0; index < dir.length; index++) {
  const path = dir[index];
  const fileName = path.split(".")[0];
  const content = fs.readFileSync(`./content/_blog/${path}`, "utf8");

  const match = /thumb: (.*)/.exec(content);
  if (match) {
    fs.mkdirSync(`./content/blog/`, { recursive: true });
    fs.writeFileSync(`./content/blog/${fileName}.md`, content.replace(match[1], `/public/media/${match[1]}`));
    const thumb = fs.readFileSync(`./_assets/images/${match[1]}`);
    fs.writeFileSync(`./public/media/${match[1]}`, thumb);
  }
}
