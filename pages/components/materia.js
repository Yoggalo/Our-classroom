import styles from "../../styles/Materia.module.css";
import Image from "next/image";
import meet from "../../public/meetlog.png"

export default function Materia() {
  return (
    <main>
      <div className={styles.sidebar}>
        <div className={styles.sidebarElement}>
          <h3>Accedi alla videolezione</h3>
          <Image alt="Vercel logo" src={meet} width={100} height={100} />
          <button>Link</button>
          </div>
        <div className={styles.sidebarElement}>ciao</div>
        <div className={styles.sidebarElement}>belli</div>
        <div className={styles.sidebarElement}>come</div>
        <div className={styles.sidebarElement}>state</div>
      </div>
      <div className={styles.content}>
        <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus dolor ut tortor convallis, id condimentum enim volutpat. Sed tristique, dui at varius consectetur, risus enim laoreet felis, et feugiat tellus magna a sem. Praesent eget ante ut mi ullamcorper varius vel eu justo. Suspendisse potenti. Suspendisse vitae congue ipsum. Fusce interdum nec sapien et faucibus. Ut eget cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquet sapien vitae egestas molestie.

Sed eget vestibulum sapien, ac scelerisque odio. Sed a luctus arcu. Nam sed nulla mi. Phasellus nec egestas turpis, vitae laoreet ligula. Cras a pharetra orci. Etiam suscipit felis sagittis massa dictum fermentum. Etiam sit amet nulla mollis, consequat tortor eget, suscipit libero. Vestibulum feugiat nisi sollicitudin nulla viverra, et fermentum nunc luctus. Praesent mi sapien, egestas eget semper non, porttitor vitae lorem. Curabitur urna lorem, sodales sit amet nisi vel, ultricies sodales magna. Sed accumsan fringilla lorem sed pharetra. Sed id libero ultrices, efficitur enim eu, gravida nisi. Nullam bibendum nulla sed mauris tempor, in lacinia elit tincidunt. Pellentesque sit amet nisl posuere, imperdiet ex ut, porttitor sapien. Morbi bibendum imperdiet maximus.

Donec porta ullamcorper leo ornare faucibus. Fusce justo lorem, commodo eget arcu id, congue imperdiet felis. Fusce urna nisl, sodales ut tristique eget, tempor a est. Fusce ut metus id quam consequat semper. Morbi tristique tincidunt condimentum. Suspendisse quis nunc eleifend, tincidunt nisl ac, tristique enim. Fusce pulvinar laoreet velit, nec vestibulum enim ullamcorper quis. Etiam dignissim turpis eget velit egestas, interdum rutrum felis vulputate. Cras placerat purus nec elementum tristique. Quisque at nunc quam. Sed viverra eu nisl eget ullamcorper. Phasellus in metus et arcu congue ornare nec ut orci. Nullam pharetra eleifend nisl non hendrerit. In iaculis lorem eget ligula sagittis commodo.

Proin blandit sit amet tortor et facilisis. Vivamus iaculis, nulla ac ullamcorper dictum, ante quam accumsan erat, ac eleifend tortor neque eu felis. Proin condimentum tellus a augue gravida pellentesque. Cras ullamcorper aliquam arcu, quis pulvinar lectus egestas nec. Vestibulum ultrices finibus lacus eu condimentum. Nam ex magna, sodales in volutpat quis, ornare quis orci. Aliquam luctus pellentesque mi non dictum.

Aliquam hendrerit augue blandit porta condimentum. Fusce efficitur malesuada sapien eget laoreet. Pellentesque augue lacus, dictum vel magna vitae, laoreet cursus felis. Aenean vel eros et risus ullamcorper convallis nec sed risus. Vestibulum a neque eu nisl efficitur elementum ac in purus. Nunc at finibus massa. Aenean non congue est. Morbi nec nunc sed tortor lacinia commodo quis vel erat. </p>
      </div>
    </main>
  );
}
