/**
 * @const
 * @namespace
 */
var Catapult:any = Catapult || {};

/**
 * @const
 * @namespace
 */
Catapult.Buffers = Catapult.Buffers || {};

/**
 * @constructor
 */
Catapult.Buffers.AggregateTransactionBuffer = function() {
    /**
     * @type {flatbuffers.ByteBuffer}
     */
    this.bb = null;

    /**
     * @type {number}
     */
    this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {Catapult.Buffers.AggregateTransactionBuffer}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.__init = function(i:any, bb:any) {
    this.bb_pos = i;
    this.bb = bb;
    return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {Catapult.Buffers.AggregateTransactionBuffer=} obj
 * @returns {Catapult.Buffers.AggregateTransactionBuffer}
 */
Catapult.Buffers.AggregateTransactionBuffer.getRootAsAggregateTransactionBuffer = function(bb:any, obj:any) {
    return (obj || new Catapult.Buffers.AggregateTransactionBuffer).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.size = function() {
    var offset = this.bb.__offset(this.bb_pos, 4);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signature = function(index:any) {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signatureLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signatureArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 6);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signer = function(index:any) {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signerLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.signerArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 8);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.version = function() {
    var offset = this.bb.__offset(this.bb_pos, 10);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.type = function() {
    var offset = this.bb.__offset(this.bb_pos, 12);
    return offset ? this.bb.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.fee = function(index:any) {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.feeLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.feeArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 14);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadline = function(index:any) {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.readUint32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadlineLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint32Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.deadlineArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 16);
    return offset ? new Uint32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsSize = function() {
    var offset = this.bb.__offset(this.bb_pos, 18);
    return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param {number} index
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactions = function(index:any) {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns {number}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsLength = function() {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns {Uint8Array}
 */
Catapult.Buffers.AggregateTransactionBuffer.prototype.transactionsArray = function() {
    var offset = this.bb.__offset(this.bb_pos, 20);
    return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
Catapult.Buffers.AggregateTransactionBuffer.startAggregateTransactionBuffer = function(builder:any) {
    builder.startObject(9);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} size
 */
Catapult.Buffers.AggregateTransactionBuffer.addSize = function(builder:any, size:any) {
    builder.addFieldInt32(0, size, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signatureOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addSignature = function(builder:any, signatureOffset:any) {
    builder.addFieldOffset(1, signatureOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createSignatureVector = function(builder:any, data:any) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startSignatureVector = function(builder:any, numElems:any) {
    builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} signerOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addSigner = function(builder:any, signerOffset:any) {
    builder.addFieldOffset(2, signerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createSignerVector = function(builder:any, data:any) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startSignerVector = function(builder:any, numElems:any) {
    builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} version
 */
Catapult.Buffers.AggregateTransactionBuffer.addVersion = function(builder:any, version:any) {
    builder.addFieldInt16(3, version, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} type
 */
Catapult.Buffers.AggregateTransactionBuffer.addType = function(builder:any, type:any) {
    builder.addFieldInt16(4, type, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} feeOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addFee = function(builder:any, feeOffset:any) {
    builder.addFieldOffset(5, feeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createFeeVector = function(builder:any, data:any) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startFeeVector = function(builder:any, numElems:any) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} deadlineOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addDeadline = function(builder:any, deadlineOffset:any) {
    builder.addFieldOffset(6, deadlineOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createDeadlineVector = function(builder:any, data:any) {
    builder.startVector(4, data.length, 4);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt32(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startDeadlineVector = function(builder:any, numElems:any) {
    builder.startVector(4, numElems, 4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} transactionsSize
 */
Catapult.Buffers.AggregateTransactionBuffer.addTransactionsSize = function(builder:any, transactionsSize:any) {
    builder.addFieldInt32(7, transactionsSize, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} transactionsOffset
 */
Catapult.Buffers.AggregateTransactionBuffer.addTransactions = function(builder:any, transactionsOffset:any) {
    builder.addFieldOffset(8, transactionsOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {Array.<number>} data
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.createTransactionsVector = function(builder:any, data:any) {
    builder.startVector(1, data.length, 1);
    for (var i = data.length - 1; i >= 0; i--) {
        builder.addInt8(data[i]);
    }
    return builder.endVector();
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} numElems
 */
Catapult.Buffers.AggregateTransactionBuffer.startTransactionsVector = function(builder:any, numElems:any) {
    builder.startVector(1, numElems, 1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
Catapult.Buffers.AggregateTransactionBuffer.endAggregateTransactionBuffer = function(builder:any) {
    var offset = builder.endObject();
    return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
Catapult.Buffers.AggregateTransactionBuffer.finishAggregateTransactionBufferBuffer = function(builder:any, offset:any) {
    builder.finish(offset);
};

// Exports for Node.js and RequireJS
export default Catapult;
