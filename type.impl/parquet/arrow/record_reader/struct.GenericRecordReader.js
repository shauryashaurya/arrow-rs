(function() {var type_impls = {
"parquet":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericRecordReader%3CV,+CV%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#63-223\">source</a><a href=\"#impl-GenericRecordReader%3CV,+CV%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;V, CV&gt; <a class=\"struct\" href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html\" title=\"struct parquet::arrow::record_reader::GenericRecordReader\">GenericRecordReader</a>&lt;V, CV&gt;<div class=\"where\">where\n    V: <a class=\"trait\" href=\"parquet/arrow/record_reader/buffer/trait.ValuesBuffer.html\" title=\"trait parquet::arrow::record_reader::buffer::ValuesBuffer\">ValuesBuffer</a>,\n    CV: <a class=\"trait\" href=\"parquet/column/reader/decoder/trait.ColumnValueDecoder.html\" title=\"trait parquet::column::reader::decoder::ColumnValueDecoder\">ColumnValueDecoder</a>&lt;Buffer = V&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#69-84\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.new\" class=\"fn\">new</a>(desc: <a class=\"type\" href=\"parquet/schema/types/type.ColumnDescPtr.html\" title=\"type parquet::schema::types::ColumnDescPtr\">ColumnDescPtr</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html\" title=\"struct parquet::arrow::record_reader::GenericRecordReader\"><code>GenericRecordReader</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_page_reader\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#87-106\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.set_page_reader\" class=\"fn\">set_page_reader</a>(\n    &amp;mut self,\n    page_reader: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"parquet/column/page/trait.PageReader.html\" title=\"trait parquet::column::page::PageReader\">PageReader</a>&gt;,\n) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Set the current page reader.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_records\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#113-128\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.read_records\" class=\"fn\">read_records</a>(&amp;mut self, num_records: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to read <code>num_records</code> of column data into internal buffer.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<p>Number of actual records read.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip_records\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#135-140\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.skip_records\" class=\"fn\">skip_records</a>(&amp;mut self, num_records: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to skip the next <code>num_records</code> rows</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<p>Number of records skipped</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_records\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#144-146\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.num_records\" class=\"fn\">num_records</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Returns number of records stored in buffer.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.num_values\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#151-153\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.num_values\" class=\"fn\">num_values</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return number of values stored in buffer.\nIf the parquet column is not repeated, it should be equals to <code>num_records</code>,\notherwise it should be larger than or equal to <code>num_records</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_def_levels\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#159-161\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.consume_def_levels\" class=\"fn\">consume_def_levels</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns definition level data.\nThe implementation has side effects. It will create a new buffer to hold those\ndefinition level values that have already been read into memory but not counted\nas record values, e.g. those from <code>self.num_values</code> to <code>self.values_written</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_rep_levels\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#165-167\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.consume_rep_levels\" class=\"fn\">consume_rep_levels</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i16.html\">i16</a>&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return repetition level data.\nThe side effect is similar to <code>consume_def_levels</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_record_data\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#171-173\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.consume_record_data\" class=\"fn\">consume_record_data</a>(&amp;mut self) -&gt; V</h4></section></summary><div class=\"docblock\"><p>Returns currently stored buffer data.\nThe side effect is similar to <code>consume_def_levels</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_bitmap_buffer\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#177-179\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.consume_bitmap_buffer\" class=\"fn\">consume_bitmap_buffer</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Buffer&gt;</h4></section></summary><div class=\"docblock\"><p>Returns currently stored null bitmap data.\nThe side effect is similar to <code>consume_def_levels</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#184-187\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Reset state of record reader.\nShould be called after consuming data, e.g. <code>consume_rep_levels</code>,\n<code>consume_rep_levels</code>, <code>consume_record_data</code> and <code>consume_bitmap_buffer</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consume_bitmap\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#190-194\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.consume_bitmap\" class=\"fn\">consume_bitmap</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Buffer&gt;</h4></section></summary><div class=\"docblock\"><p>Returns bitmap data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read_one_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/arrow/record_reader/mod.rs.html#197-222\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/arrow/record_reader/struct.GenericRecordReader.html#tymethod.read_one_batch\" class=\"fn\">read_one_batch</a>(&amp;mut self, batch_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; <a class=\"type\" href=\"parquet/errors/type.Result.html\" title=\"type parquet::errors::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Try to read one batch of data returning the number of records read</p>\n</div></details></div></details>",0,"parquet::arrow::record_reader::RecordReader"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()