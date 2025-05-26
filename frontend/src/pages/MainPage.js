import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* 헤더 */}
            <header className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold text-blue-600">건강 관리 시스템</h1>
                        <div className="flex space-x-4">
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={() => navigate('/chat')}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                                    >
                                        AI 상담
                                    </button>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            navigate('/login');
                                        }}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                                    >
                                        로그아웃
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => navigate('/login')}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                                >
                                    로그인
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* 메인 컨텐츠 */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        당신의 건강을 위한 최고의 선택
                    </h2>
                    <p className="text-xl text-gray-600">
                        AI 기반 건강 상담과 맞춤형 건강 관리 서비스를 제공합니다.
                    </p>
                </div>

                {/* 기능 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI 상담 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div className="text-blue-500 text-4xl mb-4">
                            <i className="fas fa-robot"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">AI 건강 상담</h3>
                        <p className="text-gray-600 mb-4">
                            24시간 언제든지 AI와 함께 건강에 대해 상담하세요.
                        </p>
                        <button
                            onClick={() => navigate('/chat')}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
                        >
                            상담 시작하기
                        </button>
                    </div>

                    {/* 건강 기록 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div className="text-green-500 text-4xl mb-4">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">건강 기록 관리</h3>
                        <p className="text-gray-600 mb-4">
                            일일 건강 상태와 운동 기록을 체계적으로 관리하세요.
                        </p>
                        <button
                            onClick={() => navigate('/health-records')}
                            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300"
                        >
                            기록 보기
                        </button>
                    </div>

                    {/* 운동 추천 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                        <div className="text-purple-500 text-4xl mb-4">
                            <i className="fas fa-dumbbell"></i>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">맞춤형 운동 추천</h3>
                        <p className="text-gray-600 mb-4">
                            당신의 건강 상태에 맞는 최적의 운동을 추천해드립니다.
                        </p>
                        <button
                            onClick={() => navigate('/exercise')}
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition duration-300"
                        >
                            운동 추천받기
                        </button>
                    </div>
                </div>

                {/* 소개 섹션 */}
                <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">서비스 소개</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">AI 기반 건강 상담</h3>
                            <p className="text-gray-600">
                                최신 AI 기술을 활용하여 24시간 언제든지 건강 상담을 받을 수 있습니다.
                                전문가 수준의 건강 조언과 맞춤형 건강 관리 방안을 제시해드립니다.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">체계적인 건강 관리</h3>
                            <p className="text-gray-600">
                                일일 건강 상태 기록, 운동 관리, 식단 관리 등 종합적인 건강 관리 서비스를
                                제공합니다. 데이터 기반의 맞춤형 건강 관리 방안을 제시합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* 푸터 */}
            <footer className="bg-gray-800 text-white mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">건강 관리 시스템</h3>
                            <p className="text-gray-400">
                                당신의 건강한 삶을 위한 최고의 선택
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">서비스</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>AI 건강 상담</li>
                                <li>건강 기록 관리</li>
                                <li>맞춤형 운동 추천</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">문의하기</h3>
                            <p className="text-gray-400">
                                이메일: support@health.com<br />
                                전화: 123-456-7890
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; 2025 건강 관리 시스템. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainPage; 