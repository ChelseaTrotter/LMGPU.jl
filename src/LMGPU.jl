module LMGPU

#put all external pacakges here.
using DelimitedFiles
using LinearAlgebra
using Base.Threads
using ZipFile
using CUDA
# using CuArrays
# using CUDAnative
# using CUDAdrv
# import CuArrays.CuArray

#put all your source file here.
include("data_io.jl")
include("util.jl")
include("cpu.jl")
include("gpu.jl")
include("common_func.jl")
include("match_gmap_info.jl")
# include("cli.jl")

#put all your public functions (functions that you want user to use) here.
export get_geno_data, get_pheno_data, cpurun, get_gmap_info, match_gmap #, gpurun

end # module
