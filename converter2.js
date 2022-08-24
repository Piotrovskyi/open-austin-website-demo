const fs = require("fs");
const dir = fs
  .readdirSync("./content/blog")
  .filter((file) => file.endsWith(".md"));

for (let index = 0; index < dir.length; index++) {
  const path = dir[index];
  const fileName = path.split(".")[0];
  const content = fs.readFileSync(`./content/blog/${path}`, "utf8");

  const match = /\(\/assets\/(.*?)\)/.exec(content);
  if (match) {
    console.log(1, match[1])
    const fileName1 = match[1].split('/').pop();
    fs.copyFileSync(`./.assets/${match[1]}`, `./public/media/${fileName1}`);
    fs.writeFileSync(`./content/blog/${path}`, content.replace(`/assets/${match[1]}`, `/media/${match[1]}`));
  }

  // const match2 = /"\/wp-content\/(.*?)"/.exec(content);
  // if (match2) {
  //   console.log(2, match2[1])
  //   fs.copyFileSync(`./wp-content/${match2[1]}`, `./public/media/${match2[1]}`);
  //   fs.writeFileSync(`./content/blog/${path}`, content.replace(`/wp-content/${match2[1]}`, `/media/${match2[1]}`));
  // }
  // if (match) {
  //   fs.mkdirSync(`./content/blog/`, { recursive: true });
  //   fs.writeFileSync(
  //     `./content/blog/${fileName}.md`,
  //     content.replace(match[1], `/public/media/${match[1]}`)
  //   );
  //   const thumb = fs.readFileSync(`./_assets/images/${match[1]}`);
  //   fs.writeFileSync(`./public/media/${match[1]}`, thumb);
  // }
}
