// A little spine on wide screens: the highlighted vertebra tracks your scroll.
const spine = document.getElementById("spine");
const N = 24;
for (let i = 0; i < N; i++) {
  const v = document.createElement("i");
  v.style.width = (12 + (i / (N - 1)) * 22) + "px";
  spine.appendChild(v);
}
const bones = [...spine.children];
function update() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const active = Math.round((max > 0 ? scrollY / max : 0) * (N - 1));
  bones.forEach((b, i) => b.classList.toggle("on", i === active));
}
addEventListener("scroll", update, { passive: true });
addEventListener("resize", update);
update();
