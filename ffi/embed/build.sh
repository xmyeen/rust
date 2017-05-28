cargo build --release
cp -v target/release/libembed.so ../ffi-c-embed/lib/
cp -v target/release/libembed.so ../ffi-node-embed/lib/
