fn diverges(text: &str) -> !{
    panic!("{} - this function never returns!", text);
}


fn main() {
    let f: fn(&str)->! = diverges;

    let f1: i32 = f("throw here, process will exit!");

    let f2: String = f("never execute this line");
}
