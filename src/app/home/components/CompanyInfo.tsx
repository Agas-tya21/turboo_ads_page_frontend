import React from 'react';

const BFI_BLUE = "#FE0000";

const CompanyInfo = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                    Turboo adalah Perusahaan Pembiayaan Tepercaya di Indonesia
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                    <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>Sejak 1982</h3>
                    <p className="text-gray-600 mt-2">Lebih dari 40 tahun hadir dan melayani kebutuhan keuangan masyarakat.</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;400.000</h3>
                    <p className="text-gray-600 mt-2">Konsumen aktif telah memilih Turboo sebagai mitra keuangannya.</p>
                </div>
                <div>
                    <h3 className="text-3xl font-bold" style={{color: BFI_BLUE}}>&gt;200 Cabang</h3>
                    <p className="text-gray-600 mt-2">Pelayanan yang tersebar hampir seluruh Indonesia.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
);

export default CompanyInfo;