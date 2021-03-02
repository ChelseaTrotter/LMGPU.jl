var documenterSearchIndex = {"docs":
[{"location":"library/#Library","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/","page":"Library","title":"Library","text":"","category":"page"},{"location":"library/","page":"Library","title":"Library","text":"Modules = [LiteQTL]","category":"page"},{"location":"library/#LiteQTL.cpurun-Tuple{AbstractMatrix{var\"#s74\"} where var\"#s74\"<:Real, AbstractMatrix{var\"#s38\"} where var\"#s38\"<:Real, Int64, Bool}","page":"Library","title":"LiteQTL.cpurun","text":"cpurun(Y, G, n, export_matrix)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.cpurun-Tuple{AbstractMatrix{var\"#s74\"} where var\"#s74\"<:Real, AbstractMatrix{var\"#s75\"} where var\"#s75\"<:Real, AbstractMatrix{var\"#s76\"} where var\"#s76\"<:Real, Int64, Bool}","page":"Library","title":"LiteQTL.cpurun","text":"cpurun(Y, G, X, n, export_matrix)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nX : a matrix of covariates\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.get_geno_data-Tuple{Any, Any}","page":"Library","title":"LiteQTL.get_geno_data","text":"get_geno_data(file, datatype)\n\n\nreturns the genotype data. Will skip every other column because genotype probability is duplicated. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.get_pheno_data-Tuple{Any, Any}","page":"Library","title":"LiteQTL.get_pheno_data","text":"get_pheno_data(file, datatype; transposed)\n\n\nreturns the phenotype data. If transposed=true, then the data will be transposed. \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.gpurun-Tuple{Matrix{var\"#s22\"} where var\"#s22\"<:Real, Matrix{var\"#s21\"} where var\"#s21\"<:Real, Any}","page":"Library","title":"LiteQTL.gpurun","text":"gpurun(Y, G, n)\n\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\n\nOutput:\n\nreturns the maximum LOD (Log of odds) score \n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.scan-Tuple{AbstractMatrix{var\"#s140\"} where var\"#s140\"<:Real, AbstractMatrix{var\"#s141\"} where var\"#s141\"<:Real, Int64}","page":"Library","title":"LiteQTL.scan","text":"scan(Y, G, n; export_matrix, usegpu)\n\n\nThis function will run genome scan without covariates.\n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \nusegpu : a boolean value that indicates whether to run scan function on GPU or CPU. Default is false, which runs scan on CPU. \n\nOutput:\n\ncalls cpurun function if usegpu=false, otherwise, calls gpurun\n\n\n\n\n\n","category":"method"},{"location":"library/#LiteQTL.scan-Tuple{AbstractMatrix{var\"#s21\"} where var\"#s21\"<:Real, AbstractMatrix{var\"#s144\"} where var\"#s144\"<:Real, AbstractMatrix{var\"#s145\"} where var\"#s145\"<:Real, Int64}","page":"Library","title":"LiteQTL.scan","text":"scan(Y, G, X, n; export_matrix, usegpu)\n\n\nThis scan function will run \n\nArguments:\n\nY : a matrix of phenotypes\nG : a matrix of genotypes\nX : a matrix of covariates\nn : the number of individuals\nexport_matrix : a boolean value that determines whether the result should be the maximum value of LOD score of each phenotype and its corresponding index, or the whole LOD score matrix. \nusegpu : a boolean value that indicates whether to run scan function on GPU or CPU. Default is false, which runs scan on CPU. \n\nOutput:\n\nreturns the maximum LOD (Log of odds) score if export_matrix is false, or LOD score matrix otherwise.\n\n\n\n\n\n","category":"method"},{"location":"#LiteQTL.jl-Documentation","page":"Home","title":"LiteQTL.jl Documentation","text":"","category":"section"},{"location":"#Package-information","page":"Home","title":"Package information","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LiteQTL is a package that runs whole genome QTL scans near real-time, utilizing the computation power of GPU. ","category":"page"},{"location":"#Features","page":"Home","title":"Features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Near real time computation for whole genome scan using Linear Model\nGenome scan with covairates\nCPU parallelization and GPU acceleration\nInput data can be of different precisions (Float32, or Float64)","category":"page"},{"location":"#Input-and-Output","page":"Home","title":"Input and Output","text":"","category":"section"},{"location":"#Input-(all-with-no-missing-data)","page":"Home","title":"Input (all with no missing data)","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Genotype probability \nPhenotype\nCovariates (Optional)","category":"page"},{"location":"#Output","page":"Home","title":"Output","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Default) Maximum LOD (Log of Odds) score, and the index of the maximum\nLOD (Log of Odds) matrix","category":"page"},{"location":"#Example","page":"Home","title":"Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"See example/spleen_analysis.ipynb","category":"page"},{"location":"#Auxilary-Github-Repositories","page":"Home","title":"Auxilary Github Repositories","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LiteQTL.jl Binary Compilation","category":"page"},{"location":"","page":"Home","title":"Home","text":"This repo contais scripts to compile the LiteQTL package to remove the compilation time of Julia (the extra time in the first run in Julia REPL).","category":"page"},{"location":"","page":"Home","title":"Home","text":"LiteQTL.jl G3 Journal Supplemental Materials","category":"page"},{"location":"","page":"Home","title":"Home","text":"It is an effort to make our research reproducible. All code related to experiment reuslt, from dowloading data, cleaning data, to running LiteQTL and creating figure are found in this repository. You can recreate the results in our paper Speeding up eQTL scans in the BXD population using GPUs using the scripts in this repository.","category":"page"}]
}
