module LiteQTL

#put all external pacakges here.
using DelimitedFiles
using LinearAlgebra
using Base.Threads
using CUDA
using CSV
using DocStringExtensions
using Statistics


#put all your source file here.
include("common_func.jl")
include("data_io.jl")
export get_geno_data, get_pheno_data
include("util.jl")
include("cpu.jl")
include("gpu.jl")
include("scan.jl")
export scan
include("match_gmap_info.jl")
export  get_gmap_info, match_gmap
# include("cli.jl")


end # module
